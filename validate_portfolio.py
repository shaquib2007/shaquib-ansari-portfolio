from pathlib import Path
import re
from bs4 import BeautifulSoup

root = Path(__file__).parent
html_path = root / "index.html"
script_path = root / "script.js"
html = html_path.read_text(encoding="utf-8")
script = script_path.read_text(encoding="utf-8")
soup = BeautifulSoup(html, "html.parser")

required_ids = ["about", "resume", "skills", "projects", "certificates", "achievements", "contact"]
missing_ids = [section_id for section_id in required_ids if soup.find(id=section_id) is None]
nav_targets = [link.get("href", "")[1:] for link in soup.select(".nav-link") if link.get("href", "").startswith("#")]
missing_nav_targets = [target for target in nav_targets if soup.find(id=target) is None]
resume_link = soup.select_one('a[download][href$="shaquib-ansari-cv.pdf"]')
resume_path = root / "outputs" / "shaquib-ansari-cv.pdf"
certificate_paths = [
    root / "outputs" / "certificates" / "core-java-basics-upgrad.pdf",
    root / "outputs" / "certificates" / "big-data-201-infosys-springboard.pdf",
]
expected_projects = [
    "neet",
    "jarvis",
    "prompt-generator",
    "video-player",
    "esp32-robot",
    "cultivanova",
    "remotion",
]
project_ids = re.findall(r"\bid:\s*'([^']+)'", script)
private_github_urls = [
    "https://github.com/shaquib2007/Prompt_generator",
    "https://github.com/shaquib2007/Video-player-for-macOS",
    "https://github.com/shaquib2007/Jarvis-Agent-Mac-OS",
    "https://github.com/shaquib2007/ESP32-Remote-Robot-Car-Control",
    "https://github.com/shaquib2007/CultivaNova",
    "https://github.com/shaquib2007/remotion",
]

errors = []
if missing_ids:
    errors.append(f"Missing sections: {', '.join(missing_ids)}")
if missing_nav_targets:
    errors.append(f"Missing navigation targets: {', '.join(missing_nav_targets)}")
if resume_link is None:
    errors.append("Missing downloadable resume link")
if not resume_path.is_file() or resume_path.stat().st_size == 0:
    errors.append("Resume asset is missing or empty")
for certificate_path in certificate_paths:
    if not certificate_path.is_file() or certificate_path.stat().st_size == 0:
        errors.append(f"Certificate asset is missing or empty: {certificate_path.name}")
if project_ids != expected_projects:
    errors.append(f"Project data order/IDs do not match expected sequence: {project_ids}")
if "https://github.com/shaquib2007/neet" not in script:
    errors.append("Missing public NEET GitHub repository link")
if "https://neet-self.vercel.app" not in script:
    errors.append("Missing verified NEET live project link")
if script.count("githubVisibility: 'private'") != 6:
    errors.append("Expected six private project records")
for private_repo in private_github_urls:
    if private_repo in html or private_repo in script:
        errors.append(f"Private repository URL exposed: {private_repo}")
if "Source code is kept private." not in html:
    errors.append("Missing private-source modal message")
for modal_id in ["project-modal", "project-modal-title", "project-modal-description", "project-modal-tech", "project-modal-status"]:
    if soup.find(id=modal_id) is None:
        errors.append(f"Missing project modal element: {modal_id}")
expected_filters = {"all", "AI / ML", "WEB", "DESKTOP", "HARDWARE"}
actual_filters = {button.get("data-project-filter") for button in soup.select(".project-filter")}
if actual_filters != expected_filters:
    errors.append(f"Project filter set does not match expected categories: {actual_filters}")
if "project-filters" not in html or "overflow-x:auto" not in (root / "styles.css").read_text(encoding="utf-8"):
    errors.append("Missing responsive project filter treatment")
achievement = soup.find(id="achievements")
achievement_text = achievement.get_text(" ", strip=True) if achievement else ""
for required_phrase in ["Personal progress", "Building through", "consistent learning.", "B.Tech CSE", "Learning by building", "AI / ML direction", "Continuous improvement"]:
    if required_phrase.lower() not in achievement_text.lower():
        errors.append(f"Missing Achievements content: {required_phrase}")
if len(soup.select("#achievements .milestone-block")) != 4:
    errors.append("Achievements section must contain exactly four milestone blocks")
for forbidden_phrase in ["award", "winner", "achievement unlocked", "top performer", "expert", "industry ready", "outstanding"]:
    if forbidden_phrase in achievement_text.lower():
        errors.append(f"Forbidden achievement claim found: {forbidden_phrase}")

if errors:
    raise SystemExit("Validation failed:\n- " + "\n- ".join(errors))

print("Projects-only portfolio validation passed")
print(f"Sections checked: {len(required_ids)}")
print(f"Navigation targets checked: {len(nav_targets)}")
print(f"Projects in data model: {len(project_ids)}")
print(f"Public GitHub/live links: 2")
print("Private repository URLs exposed: 0")
print(f"Certificate assets checked: {len(certificate_paths)}")
print(f"Resume asset: {resume_path.relative_to(root)} ({resume_path.stat().st_size} bytes)")
