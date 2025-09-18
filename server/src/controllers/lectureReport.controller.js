const lectureReportRepository = require('../repositories/lectureReport.repository');

class LectureReportController {
  async getAll(req, res, next) {
    try {
      const reports = await lectureReportRepository.findAll();
      res.json(reports);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const report = await lectureReportRepository.findById(req.params.id);
      if (!report) return res.status(404).json({ message: 'Report not found' });
      res.json(report);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const newReport = await lectureReportRepository.create(req.body);
      res.status(201).json(newReport);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const updatedReport = await lectureReportRepository.update(req.params.id, req.body);
      res.json(updatedReport);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await lectureReportRepository.delete(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new LectureReportController();
