const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
}

// API Routes - Examples for KUSCCO

// 1. Membership API
app.get('/api/membership/types', (req, res) => {
  res.json([
    { id: 1, name: 'Individual Membership', description: 'For individual members' },
    { id: 2, name: 'Corporate Membership', description: 'For corporate organizations' },
    { id: 3, name: 'Institutional Membership', description: 'For institutions and NGOs' }
  ]);
});

// 2. News API
app.get('/api/news', (req, res) => {
  res.json([
    { 
      id: 1, 
      title: 'KUSCCO Annual General Meeting 2024', 
      date: '2024-03-20',
      content: 'Annual general meeting scheduled for all members...'
    },
    { 
      id: 2, 
      title: 'New Insurance Products Launch', 
      date: '2024-03-15',
      content: 'Introducing new insurance products for members...'
    }
  ]);
});

// 3. Contact Form Submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Here you would typically save to database
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for contacting KUSCCO. We will get back to you soon.' 
  });
});

// 4. Services API
app.get('/api/services', (req, res) => {
  res.json([
    { 
      id: 1, 
      title: 'Insurance Services', 
      description: 'Comprehensive insurance solutions for SACCOs',
      icon: 'shield'
    },
    { 
      id: 2, 
      title: 'Financial Services', 
      description: 'Financial management and advisory services',
      icon: 'bank'
    },
    { 
      id: 3, 
      title: 'Consultancy', 
      description: 'Expert consultancy for SACCO operations',
      icon: 'consult'
    }
  ]);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'KUSCCO backend is running' });
});

// For all other requests in production, serve React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`KUSCCO backend server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});