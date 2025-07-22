import pandas as pd

# File path (replace with your actual path)
file_path = r"C:\Users\HP\Downloads\TZIR81FL\TZIR81FL.DTA"

# Read .dta file
df = pd.read_stata(file_path)

# Save as CSV
df.to_csv(r"C:\Users\HP\Downloads\TZIR81FL\TZIR81FL.csv", index=False)

print("Conversion complete! CSV file saved.")
