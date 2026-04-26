import os
import requests

logos = [
    ("https://idealize.aiesec.lk/partnership-logos/Creative Software.png", "Creative Software.png"),
    ("https://idealize.aiesec.lk/partnership-logos/virtusa_logo.png", "virtusa_logo.png"),
    ("https://idealize.aiesec.lk/partnership-logos/Advania.jpg", "Advania.jpg"),
    ("https://idealize.aiesec.lk/partnership-logos/Asiri Construction.png", "Asiri Construction.png"),
    ("https://idealize.aiesec.lk/partnership-logos/DSC.png", "DSC.png"),
    ("https://idealize.aiesec.lk/partnership-logos/ANTYRA SOLUTIONS.PNG", "ANTYRA SOLUTIONS.PNG"),
    ("https://idealize.aiesec.lk/partnership-logos/Expo Airline.jpg", "Expo Airline.jpg"),
    ("https://idealize.aiesec.lk/partnership-logos/Guardian Solutions.jpg", "Guardian Solutions.jpg"),
    ("https://idealize.aiesec.lk/partnership-logos/Red Line.jpg", "Red Line.jpg"),
    ("https://idealize.aiesec.lk/partnership-logos/Bistec.jpg", "Bistec.jpg"),
    ("https://idealize.aiesec.lk/partnership-logos/Pearl-Bay.png", "Pearl-Bay.png"),
    ("https://idealize.aiesec.lk/partnership-logos/Booktainer Co.jpg", "Booktainer Co.jpg"),
    ("https://idealize.aiesec.lk/partnership-logos/Iconic Bags.lk.jpg", "Iconic Bags.lk.jpg"),
    ("https://idealize.aiesec.lk/partnership-logos/Photographer.png", "Photographer.png"),
    ("https://idealize.aiesec.lk/partnership-logos/Chokolaate logo .png", "Chokolaate logo.png"),
    ("https://idealize.aiesec.lk/partnership-logos/Colombo Times News.jpeg", "Colombo Times News.jpeg"),
    ("https://idealize.aiesec.lk/partnership-logos/DAILY MIRROR.jpg", "DAILY MIRROR.jpg"),
    ("https://idealize.aiesec.lk/partnership-logos/PR WIRE.png", "PR WIRE.png"),
    ("https://idealize.aiesec.lk/partnership-logos/THE SUNDAY TIMES.JPEG", "THE SUNDAY TIMES.JPEG"),
    ("https://idealize.aiesec.lk/partnership-logos/UNItoday .png", "UNItoday.png"),
    ("https://idealize.aiesec.lk/partnership-logos/GOOD-PR_LOGO_transparent1.png", "GOOD-PR_LOGO_transparent1.png"),
    ("https://idealize.aiesec.lk/partnership-logos/HackSL Official Logo.png", "HackSL Official Logo.png"),
    ("https://idealize.aiesec.lk/partnership-logos/MORA Lenz.png", "MORA Lenz.png"),
]

output_dir = "partnership-logos"
os.makedirs(output_dir, exist_ok=True)

for url, filename in logos:
    save_path = os.path.join(output_dir, filename)
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        with open(save_path, "wb") as f:
            f.write(response.content)
        print(f"✓ {filename}")
    except Exception as e:
        print(f"✗ {filename} — {e}")

print(f"\nDone. Files saved to ./{output_dir}/")