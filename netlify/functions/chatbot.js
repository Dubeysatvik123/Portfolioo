const handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { message, conversationHistory } = JSON.parse(event.body);
    
    if (!message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Message is required' })
      };
    }

    const groqApiKey = process.env.VITE_GROQ_API_KEY;
    
    if (!groqApiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: 'API key not configured',
          response: "I'm sorry, but I'm currently experiencing technical difficulties. Please contact Satvik directly at satvikdubey1203@gmail.com or through his LinkedIn profile."
        })
      };
    }

    // Portfolio information context
    const PORTFOLIO_CONTEXT = `
You are a helpful AI assistant for Satvik Dubey's portfolio website. 

About Satvik Dubey:
- DevOps Engineer, ML Engineer, GenAI Developer, Backend Developer
- Skills: Python, Docker, Kubernetes, AWS, Linux, JavaScript, React, Node.js, MySQL, Git, Frappe, AI/ML, Bash, Cloud, DevOps, RHEL, Debian, Streamlit
- Projects: Deep Fake Detection, AI Quiz Generator, Aira Prompt Solver, Docker Automation, Python Notes, Matrix Operations, Linux World Repository, Skill Sadhana LMS, Nexus Voice Assistant, VProfile Project, AWS Automation, GenAI Projects, Portfolio Website, Chanakya AI LMS, Fibonacci Generator, Dahej Predictor, Agentic AI
- Experience: Focuses on DevOps automation, AI/ML development, and full-stack applications
- Contact: satvikdubey1203@gmail.com, LinkedIn: linkedin.com/in/satvik-dubey-8477ab23b, GitHub: github.com/Dubeysatvik123

Please answer questions about Satvik's background, skills, projects, and experience. Be helpful, professional, and informative. Keep responses concise but informative (max 200 words). Always maintain a friendly and professional tone.
`;

    // Call Groq API
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          {
            role: 'system',
            content: PORTFOLIO_CONTEXT
          },
          ...(conversationHistory || []),
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 300,
        temperature: 0.7,
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response at the moment.";

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ response: aiResponse })
    };

  } catch (error) {
    console.error('Chatbot function error:', error);
    
    // Fallback responses based on common questions
    const lowerMessage = (message || '').toLowerCase();
    
    let fallbackResponse = "I'm sorry, but I'm experiencing technical difficulties. Please try again later or contact Satvik directly at satvikdubey1203@gmail.com.";
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      fallbackResponse = "You can contact Satvik at satvikdubey1203@gmail.com or connect with him on LinkedIn at linkedin.com/in/satvik-dubey-8477ab23b";
    } else if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
      fallbackResponse = "Satvik specializes in Python, Docker, Kubernetes, AWS, Linux, JavaScript, React, Node.js, MySQL, Git, Frappe, AI/ML, and DevOps technologies.";
    } else if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      fallbackResponse = "Satvik has worked on various projects including Deep Fake Detection, AI Quiz Generator, Docker Automation, VProfile Project, Agentic AI, and many more. You can check out his GitHub at github.com/Dubeysatvik123 for detailed project information.";
    } else if (lowerMessage.includes('background') || lowerMessage.includes('experience') || lowerMessage.includes('about')) {
      fallbackResponse = "Satvik is a DevOps Engineer, ML Engineer, and GenAI Developer with expertise in automation, AI/ML development, and full-stack applications. He focuses on creating scalable solutions and innovative technologies.";
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ response: fallbackResponse })
    };
  }
};

// Handle preflight requests
const corsHandler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }
  return handler(event);
};

module.exports = { handler: corsHandler }; 