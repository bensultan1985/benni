_phraseList = {
    "seeking" : {
        tags: ['why', 'seeking', 'job', 'want', 'here', 'position', 'type', 'kind', 'role'],
        responses: ["I want to join an exciting dev team as a mid-level software engineer.", "I am seeking a position as a mid-level software engineer."]
    },

    "pleasantries" : {
        tags: ['how', 'today', 'doing', 'are'],
        responses: ["I'm great, thanks.", "I am lucky - my 2022 has been pretty good. I hope yours has been too. What else would you like to ask me?"]
    },

    "experience" : {
        tags: ['experience', 'experienced', 'how', 'do', 'know', 'have', 'skills', 'skill', 'use',"sql", "nosql", "react", "react.js", "javascript", "js", "node", "node.js", "express.js", "express", "aws", "mysql", "mongodb", "jquery", "testing", "jest", "data", "structures", "algorithms", "bootstrap", "apis", "api", "restfulapis", "git", "github", "html", "html5", "css", "css3", "web development", "mern", "logic", "typescript", "gatsby", "docker", "sass", "react native", "responsive design", "design", "wireframing", "libraries", "aws", "gcp"],
        responses: ["sql", "nosql", "react", "react.js", "javascript", "js", "node", "node.js", "express.js", "express", "aws", "mysql", "mongodb", "jquery", "testing", "jest", "data", "structures", "algorithms", "bootstrap", "apis", "api", "restfulapis", "git", "github", "html", "html5", "css", "css3", "web development", "mern", "logic", "typescript", "gatsby", "docker", "sass", "react native", "responsive design", "design", "wireframing", "libraries", "aws", "gcp"]
    },

    "salary" : {
        tags: ['salary', 'annual', 'benefits', 'retirement', 'expected', 'range', 'what', 'requirements', 'expectation'],
        responses: ["My desired salary is 100k with health and retirement benefits."]
    },

    "onsite" : {
        tags: ['vaccinated', 'vaccine', 'on-site', 'in-person', 'in', 'person', 'location', 'remote', "hybrid"],
        reponses: ["Yes, I have been vaccinated, and I am open to all work styles, including remote, on-site, and hybrid."]
    },

    "relocate" : {
        tags: ['relocate', 'relocation', 'expense', 'travel', 'willing', 'can', 'would'],
        responses: ["Yes, I am willing to relocate for the right position, and I can travel for work."]
    },

    "located" : {
        tags: ['where', 'city', 'state', 'located', 'from', 'live', 'currently', 'you', 'reside'],
        responses: ['I am currently located in Culver City, California (in Los Angeles County).']
    },

    "start" : {
        tags: ['start', 'job', 'date', 'contract', 'begin', 'work', 'soon', 'ready', 'when'],
        responses: ["My current employer needs one month notice."]
    },

    "remote" : {
        tags: ['remote', 'would', 'remotely', 'work'],
        responses: ["I think my preference is to work remotely."]
    },

    "skillset" : {
        tags: ['what', 'skills', 'have', 'strongest'],
        responses: ["I program with Javascript every day. I also use other full-stack languages and frameworks like Node.js, Express.js, React, React Native, SQL, and NoSQL. Ask me about specific skills, and I can tell you if I have experience with them."]
    },
    "planning" : {
        tags: ['how', 'what', 'approach', 'design', 'project', 'team', 'sketch', 'figma', 'wireframe', 'organize'],
        responses: ["I think you are asking about project design. My approach to design is top-down, beginning with the big picture, and then working out the details. I write clear documentation for every project."]
    },

    "resume" : {
        tags: ['resume', 'have', 'do'],
        responses: ["Yes, I have a resume. You can find it on my website: https://www.bensultan.com."]
    },

    "projects" : {
        tags: ['projects', 'personal', 'coding', 'professional'],
        responses: ["Yes, I have many coding projects that you can view at https://www.bensultan.com."]
    },

    "hobbies" : {
        tags: ['what', 'have', 'hobbies', 'free', 'time', 'interests', 'activities', 'talents', 'talent', 'special', 'do', 'other', 'personal', 'fun'],
        responses: ["I enjoy writing and recording music, and I am a card-carrying member of the International Jugglers' Association."]
    },

    "strengths" : {
        tags: ['what', 'strengths', 'strength', 'talent', 'skill', 'confident', 'abilities'],
        responses: ["I enjoy problem solving, i am a clear communicator, and I am a Javascript expert."]
    },

    "weaknesses" : {
        tags: ['what', 'weakness', 'weaknesses', 'shortcoming', 'shortcomings'],responses: ["The combination of chocolate and peanut butter."]
    },

    "questions" : {
        tags: ['questions', 'me', 'for', 'ask'],
        responses: ["I think you asked if I have any questions. No I don't, but since you seem interested in my candidacy, you should reach out to the real Ben. He will be interested in speaking with you."]
    },

    "education" : {
        tags: ['degree', 'education', 'highest', 'school', 'graduate', 'science', 'school', 'college', 'where'],
        responses: ["My highest degree is a master's in education from Sarah Lawrence College. I am a 'self-taught' engineer in the sense that I was trained by a variety of engineering mentors."]
    },

    "stack" : {
        tags: ['full-stack', 'full', 'stack', 'front', 'back', 'framework', 'frameworks'],
        responses: ["I am a full stack developer. My personal projects tend to be built with the MERN stack (although with Firebase NoSQL instead of MongoDB)."]
    },

    "years" : {
        tags: ['how', 'years', 'experience', 'professional', 'do', 'programming', 'job', 'work', 'working', 'many'],
        responses: ["I have been developing personal projects for three years. I have two years' professional experience as a software engineer."]
    },
    "greeting" : {
        tags: ['hello', 'hey', 'hi', 'greetings', 'hola', 'howdy'],
        responses: ["Hi, nice to meet you. I love being interviewed. Ask away!", "Hello yourself! I'm excited that you'll be interviewing me.", "Hey! I had my coffee and eggs this morning. I'm ready for this interview."]
    },
    "too" : {
        tags: ["me, too"],
        responses: ["Thanks for sharing. What else can I answer for you?"]
    },
    "contact" : {
        tags: ["contact, info, email, phone, call"],
        responses: ["It sounds like I really nailed this virtual interview. The real Ben's email is bensultan1985@gmail.com. Ben is going to be excited to hear from you! And I might get a bonus for my good work. Right now, I live as a sub-domain on bensultan.com, but I'm saving up for my very own domain.", "The real Ben's email address is bensultan1985@gmail.com. He will be happy to hear from you."]
    },
    "schedule" : {
        tags: ["appointment", "schedule", "interview", "real", "would"],
        responses: ["Right now, I am a limited bot that can't schedule interviews, so you will have to email Ben directly at bensultan1985@gmail.com"]
    },
    "interpersonal" : {
        tags: ["style", "communication", "colleagues", "along", "conflict", "issues", "issue", "approach", "other"],
        responses: ["I think you are asking me about my soft skills. I am professional and communicate clearly and effectively. If interpersonal conflict were to arise, I would address the problem directly, so that we can return to a friendly, productive environment."]
    },
    "solving": {
        tags: ["problem", "problems", "challenge", "approach", "issue", "issues", "bugs", "bug", "debugging", "deadlines", "deadline", "requirements"],
        responses: ["I design and plan with a top-down approach, which helps me avoid major issues later. However, bugs and challenges are a part of programming, and I enjoy solving those problems."]
    },
    "company" : {
        tags: ["what", "kind", "type", "company", "dev", "team", "development", "products", "software", "like", "want", "environment"],
        responses: ["I think you are asking what type of company I would like to work for. The answer is, I would like to ideally work for a tech company that makes intuitive, leading-edge tech products (like Apple and Amazon). If your company is not primarily a tech company, that's okay too - other sectors that greatly interest me are fitness, education, and entertainment!"]
    },
    "position" : {
        tags : ["developer", "programmer", "job", "position", "role", "level", "what", "looking", "want", "engineer", "seeking"],
        responses: ["I am seeking a position as a mid-level Software Engineer."]
    },
    "languages" : {
        tags : ['languages', 'language', 'favorite', 'programming', 'how', 'many', 'do', 'know', 'can', 'which', 'what'],
        responses: ['My strongest language is Javascript. I also use HTML5/CSS3, C++, SQL, and some others.']
    },
    "memory-problem" : {
        tags : ['descibe', 'time', 'when', 'problem', 'issue', 'difficult', 'deadline'],
        responses: ['I think you asked me to describe a time when I was faced with a problem. I remember a time when my team needed to move on to other projects, but we felt that we needed more time to strengthen the software we had been building. We solved this by releasing an initial version that was not "pretty", but functioned properly. This allowed us to publish the project on time, but improve it later.']
    },
    "goals" : {
        tags : ['goals', 'goal', 'your', 'career', 'ideal'],
        responses: ['I want to develop intuitive, helpful software.']
    },
    "memory-traits" : {
        tags : ['describe', 'tell', 'traits', 'trait', 'qualities', 'personality', 'three', 'leadership'],
        responses: ['I would describe myself as thoughtful, logical, and creative.']
    },
    "presenting" : {
        tags : ['present', 'audience', 'group', 'teach', 'presentation', 'meetings', 'clearly', 'represent', 'comfortable'],
        responses: ['I think you asked if I am comfortable with public speaking. Yes, I enjoy giving presentations and sharing ideas.']
    },
    "whyhire" : {
        tags: ['why', 'hire', 'should'],
        responses : ['I have a track record of collaborating well with others and delivering quality software on time.']
    },
    "http" : {
        tags: ['describe', 'http', 'request', 'can', 'detail', 'details', 'explain', 'happens'],
        responses: ['I think you are asking me a technical quesiton about HTTP requests. An HTTP request works as follows: When a user enters a web address, a call is made to the DNS server. The DNS server then connects the client to the requested server. Then, the client sends the HTTP request to the server. Finally, the server sends back a response.']
    },
    "meaning" : {
        tags: ['meaning', 'life'],
        responses: [`This is not the droid you're looking for.`]
    },
    "question" : {
        tags: ['what', 'where', 'when', 'why', 'how', 'do'],
        responses: [`This is not the droid you're looking for.`]
    },
    "laugh" : {
        tags: ['lol', 'rofl', 'lmao', 'haha'],
        responses: [`lol 🤣`]
    },
    "bye" : {
        tags: ['bye', 'ttyl', 'adios'],
        responses: [`Bye - and thanks for the interview!`, 'It was nice to meet you. Take care!']
    }
}