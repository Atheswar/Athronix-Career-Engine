import json
import os


BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.dirname(
            os.path.dirname(__file__)
        )
    )
)

DATA_DIR = os.path.join(BASE_DIR, "data")


def load_json(filename):
    file_path = os.path.join(DATA_DIR, filename)

    with open(file_path, "r", encoding="utf-8") as file:
        return json.load(file)


def save_json(filename, data):
    file_path = os.path.join(DATA_DIR, filename)

    with open(file_path, "w", encoding="utf-8") as file:
        json.dump(data, file, indent=4)


def get_jobs():
    return load_json("jobs.json")


def get_skills():
    return load_json("skills.json")