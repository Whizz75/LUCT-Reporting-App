CREATE TABLE Class (
    class_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    class_name VARCHAR(100) NOT NULL,
    course_id INT NOT NULL REFERENCES Course(course_id) ON DELETE CASCADE,
    lecturer_id INT NOT NULL REFERENCES Lecturer(lecturer_id) ON DELETE CASCADE,
    venue_id INT NOT NULL REFERENCES Venue(venue_id) ON DELETE CASCADE,
    scheduled_time TIME NOT NULL
);