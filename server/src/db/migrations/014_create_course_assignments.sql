CREATE TABLE CourseAssignment (
    assignment_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    course_id INT NOT NULL REFERENCES Course(course_id) ON DELETE CASCADE,
    lecturer_id INT NOT NULL REFERENCES Lecturer(lecturer_id) ON DELETE CASCADE
);
