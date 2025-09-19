const express = require('express');
const router = express.Router();

// Import routes
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const studentRoutes = require('./student.routes');
const lecturerRoutes = require('./lecturer.routes');
const classRoutes = require('./student.routes');
const courseRoutes = require('./course.routes');
const courseAssignmentRoutes = require('./courseAssignment.routes');
const facultyRoutes = require('./faculty.routes');
const programRoutes = require('./program.routes');
const venueRoutes = require('./venue.routes');
const lectureReportRoutes = require('./lectureReport.routes');
const feedbackRoutes = require('./feedback.routes');
const ratingRoutes = require('./rating.routes');
const enrolmentRoutes = require('./enrolment.routes');
const roleRoutes = require('./role.routes');

// Mount routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/students', studentRoutes);
router.use('/lecturers', lecturerRoutes);
router.use('/classes', classRoutes);
router.use('/courses', courseRoutes);
router.use('/course-assignments', courseAssignmentRoutes);
router.use('/faculties', facultyRoutes);
router.use('/programs', programRoutes);
router.use('/venues', venueRoutes);
router.use('/lecture-reports', lectureReportRoutes);
router.use('/feedbacks', feedbackRoutes);
router.use('/ratings', ratingRoutes);
router.use('/enrolments', enrolmentRoutes);
router.use('/roles', roleRoutes);

module.exports = router;
