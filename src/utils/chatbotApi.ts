interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatbotResponse {
  response: string;
  error?: string;
}

// Portfolio information context
const PORTFOLIO_CONTEXT = `
You are a helpful AI assistant for Satvik Dubey's portfolio website. 

About Satvik Dubey:
- DevOps Engineer, ML Engineer, GenAI Developer, Backend Developer
- Skills: Python, Docker, Kubernetes, AWS, Linux, JavaScript, React, Node.js, MySQL, Git, Frappe, AI/ML, Bash, Cloud, DevOps, RHEL, Debian, Streamlit
- Projects: Deep Fake Detection, AI Quiz Generator, Aira Prompt Solver, Docker Automation, Python Notes, Matrix Operations, Linux World Repository, Skill Sadhana LMS, Nexus Voice Assistant, VProfile Project, AWS Automation, GenAI Projects, Portfolio Website, Chanakya AI LMS, Fibonacci Generator, Dahej Predictor
- Experience: Focuses on DevOps automation, AI/ML development, and full-stack applications
- Contact: satvikdubey1203@gmail.com, LinkedIn: linkedin.com/in/satvik-dubey-8477ab23b, GitHub: github.com/Dubeysatvik123

Please answer questions about Satvik's background, skills, projects, and experience. Be helpful, professional, and informative. Keep responses concise but informative (max 200 words). Always maintain a friendly and professional tone.
`;

export const sendChatMessage = async (
  message: string, 
  conversationHistory: ChatMessage[]
): Promise<ChatbotResponse> => {
  try {
    // Use Netlify function for secure API calls
    const response = await fetch('/.netlify/functions/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        conversationHistory
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    return {
      response: data.response || "I'm sorry, I couldn't generate a response at the moment."
    };

  } catch (error) {
    console.error('Chatbot API error:', error);
    
    // Fallback responses based on common questions
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return {
        response: "You can contact Satvik at satvikdubey1203@gmail.com or connect with him on LinkedIn at linkedin.com/in/satvik-dubey-8477ab23b"
      };
    }
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
      return {
        response: "Satvik specializes in Python, Docker, Kubernetes, AWS, Linux, JavaScript, React, Node.js, MySQL, Git, Frappe, AI/ML, and DevOps technologies."
      };
    }
    
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return {
        response: "Satvik has worked on various projects including Deep Fake Detection, AI Quiz Generator, Docker Automation, VProfile Project, and many more. You can check out his GitHub at github.com/Dubeysatvik123 for detailed project information."
      };
    }
    
    if (lowerMessage.includes('background') || lowerMessage.includes('experience') || lowerMessage.includes('about')) {
      return {
        response: "Satvik is a DevOps Engineer, ML Engineer, and GenAI Developer with expertise in automation, AI/ML development, and full-stack applications. He focuses on creating scalable solutions and innovative technologies."
      };
    }
    
    return {
      response: "I'm sorry, but I'm experiencing technical difficulties. Please try again later or contact Satvik directly at satvikdubey1203@gmail.com."
    };
  }
}; 