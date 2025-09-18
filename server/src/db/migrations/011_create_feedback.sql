CREATE TABLE Feedback (
    feedback_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    report_id INT NOT NULL REFERENCES LectureReport(report_id) ON DELETE CASCADE,
    prl_id INT NOT NULL REFERENCES Lecturer(lecturer_id), -- PRL is still a lecturer role
    feedback_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
