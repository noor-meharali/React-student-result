import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import './services.css';

export default function Services() {
  return (
    <div className="page-wrapper">
      <h1 className="section-title">Our <span className="title-accent">Courses</span></h1>
      <p className="section-sub">Structured learning paths to grow your skills</p>

      <Container fluid className="courses-section py-5">
        <Container className="courses-inner">
          <Row className="courses-row">
            <Col md={3} sm={6} xs={12} className="course-col">
              <Card className="course-card">
                <div className="card-icon-wrap">
                  <span className="card-icon">🎨</span>
                </div>
                <Card.Body className="card-body-custom">
                  <span className="card-badge">Beginner</span>
                  <Card.Title className="card-t">UI Design Basics</Card.Title>
                  <Card.Text className="course-text">
                    Learn the fundamentals of user interface design and create stunning layouts from scratch.
                  </Card.Text>
                  <div className="card-meta">
                    <span className="meta-item">⏱ 6 weeks</span>
                    <span className="meta-item">📘 12 lessons</span>
                  </div>
                  <Button className="course-btn" href="/enroll/ui-design-basics">
                    Enroll Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} className="course-col">
              <Card className="course-card">
                <div className="card-icon-wrap">
                  <span className="card-icon">⚛️</span>
                </div>
                <Card.Body className="card-body-custom">
                  <span className="card-badge">Intermediate</span>
                  <Card.Title className="card-t">React Development</Card.Title>
                  <Card.Text className="course-text">
                    Build modern, dynamic web applications using React and component-driven architecture.
                  </Card.Text>
                  <div className="card-meta">
                    <span className="meta-item">⏱ 8 weeks</span>
                    <span className="meta-item">📘 20 lessons</span>
                  </div>
                  <Button className="course-btn" href="/enroll/react-development">
                    Enroll Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} className="course-col">
              <Card className="course-card">
                <div className="card-icon-wrap">
                  <span className="card-icon">🛠️</span>
                </div>
                <Card.Body className="card-body-custom">
                  <span className="card-badge">Advanced</span>
                  <Card.Title className="card-t">Node & Express</Card.Title>
                  <Card.Text className="course-text">
                    Master backend development with Node.js, REST APIs, and Express framework.
                  </Card.Text>
                  <div className="card-meta">
                    <span className="meta-item">⏱ 10 weeks</span>
                    <span className="meta-item">📘 25 lessons</span>
                  </div>
                  <Button className="course-btn" href="/enroll/node-express">
                    Enroll Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} className="course-col">
              <Card className="course-card">
                <div className="card-icon-wrap">
                  <span className="card-icon">🗄️</span>
                </div>
                <Card.Body className="card-body-custom">
                  <span className="card-badge">Advanced</span>
                  <Card.Title className="card-t">Databases & SQL</Card.Title>
                  <Card.Text className="course-text">
                    Understand relational and non-relational databases, queries, and data modeling.
                  </Card.Text>
                  <div className="card-meta">
                    <span className="meta-item">⏱ 7 weeks</span>
                    <span className="meta-item">📘 18 lessons</span>
                  </div>
                  <Button className="course-btn" href="/enroll/databases-sql">
                    Enroll Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="courses-row">
            <Col md={3} sm={6} xs={12} className="course-col">
              <Card className="course-card">
                <div className="card-icon-wrap">
                  <span className="card-icon">🔷</span>
                </div>
                <Card.Body className="card-body-custom">
                  <span className="card-badge">Intermediate</span>
                  <Card.Title className="card-t">TypeScript Pro</Card.Title>
                  <Card.Text className="course-text">
                    Level up your JavaScript with strong typing, generics, and scalable code patterns.
                  </Card.Text>
                  <div className="card-meta">
                    <span className="meta-item">⏱ 5 weeks</span>
                    <span className="meta-item">📘 15 lessons</span>
                  </div>
                  <Button className="course-btn" href="/enroll/typescript-pro">
                    Enroll Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} className="course-col">
              <Card className="course-card">
                <div className="card-icon-wrap">
                  <span className="card-icon">🚀</span>
                </div>
                <Card.Body className="card-body-custom">
                  <span className="card-badge">Pro</span>
                  <Card.Title className="card-t">Next.js & Deploy</Card.Title>
                  <Card.Text className="course-text">
                    Ship full-stack apps with Next.js, server-side rendering, and cloud deployment.
                  </Card.Text>
                  <div className="card-meta">
                    <span className="meta-item">⏱ 9 weeks</span>
                    <span className="meta-item">📘 22 lessons</span>
                  </div>
                  <Button className="course-btn" href="/enroll/nextjs-deploy">
                    Enroll Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} className="course-col">
              <Card className="course-card">
                <div className="card-icon-wrap">
                  <span className="card-icon">🎯</span>
                </div>
                <Card.Body className="card-body-custom">
                  <span className="card-badge">Beginner</span>
                  <Card.Title className="card-t">Git & GitHub</Card.Title>
                  <Card.Text className="course-text">
                    Version control essentials — branching, merging, pull requests, and team workflows.
                  </Card.Text>
                  <div className="card-meta">
                    <span className="meta-item">⏱ 3 weeks</span>
                    <span className="meta-item">📘 10 lessons</span>
                  </div>
                  <Button className="course-btn" href="/enroll/git-github">
                    Enroll Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} className="course-col">
              <Card className="course-card">
                <div className="card-icon-wrap">
                  <span className="card-icon">🌐</span>
                </div>
                <Card.Body className="card-body-custom">
                  <span className="card-badge">Beginner</span>
                  <Card.Title className="card-t">HTML & CSS</Card.Title>
                  <Card.Text className="course-text">
                    Build your web foundation with semantic HTML, modern CSS, and responsive design.
                  </Card.Text>
                  <div className="card-meta">
                    <span className="meta-item">⏱ 4 weeks</span>
                    <span className="meta-item">📘 14 lessons</span>
                  </div>
                  <Button className="course-btn" href="/enroll/html-css">
                    Enroll Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}