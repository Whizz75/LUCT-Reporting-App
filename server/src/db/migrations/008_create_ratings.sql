CREATE TABLE Rating (
    rating_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    student_id INT NOT NULL REFERENCES Student(student_id) ON DELETE CASCADE,
    class_id INT NOT NULL REFERENCES Class(class_id) ON DELETE CASCADE,
    rating_value INT CHECK (rating_value BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
