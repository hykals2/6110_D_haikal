from locust import HttpUser, task, between

class WebsiteUser(HttpUser):
    host = "http://localhost:8000"  # Ganti dengan URL server Anda
    wait_time = between(1, 5)

    @task
    def get_tas(self):
        self.client.get("/tas")

    @task
    def add_tas(self):
        self.client.post("/tas", json={"title": "tas baru", "author": "desainer C", "year": 2023})

    @task
    def get_tas_by_id(self):
        self.client.get("/tas/1")

    @task
    def update_tas(self):
        self.client.put("/tas/1", json={"title": "tas diperbarui", "author": "desainer A", "year": 2024})

    @task
    def delete_tas(self):
        self.client.delete("/tas/1")
