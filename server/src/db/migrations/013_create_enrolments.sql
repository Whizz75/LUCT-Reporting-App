CREATE TABLE Enrollment (
    enrollment_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    student_id INT NOT NULL REFERENCES Student(student_id) ON DELETE CASCADE,
    course_id INT NOT NULL REFERENCES Course(course_id) ON DELETE CASCADE,
    enrollment_date DATE DEFAULT CURRENT_DATE
);
