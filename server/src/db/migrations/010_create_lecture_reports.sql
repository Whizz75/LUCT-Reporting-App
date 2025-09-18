CREATE TABLE LectureReport (
    report_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    class_id INT NOT NULL REFERENCES Class(class_id) ON DELETE CASCADE,
    week INT NOT NULL,
    lecture_date DATE NOT NULL,
    topic_taught TEXT NOT NULL,
    learning_outcomes TEXT,
    recommendations TEXT,
    students_present INT NOT NULL,
    total_registered INT NOT NULL
);