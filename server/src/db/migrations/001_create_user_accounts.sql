CREATE TABLE UserAccount (
    user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role_id INT NOT NULL REFERENCES Role(role_id) ON DELETE CASCADE,
    student_id INT REFERENCES Student(student_id) ON DELETE SET NULL,
    lecturer_id INT REFERENCES Lecturer(lecturer_id) ON DELETE SET NULL
);