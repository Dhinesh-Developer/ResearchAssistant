# 🧠 Research Assistant

**Research Assistant** is a lightweight Chrome Extension that helps users **summarize selected content** on any webpage and **save notes locally** for quick reference. Built with vanilla HTML/CSS/JavaScript on the frontend and powered by a **Spring Boot** backend, this tool is perfect for researchers, students, and curious minds who want to keep track of key insights efficiently.

---

## 🚀 Features

- ✂️ Summarize any selected content on a webpage  
- 📝 Take and save personal notes using Chrome Local Storage  
- 🌐 Simple and clean UI built with HTML, CSS, and JavaScript  
- ⚙️ Chrome Extension using manifest.json  
- 🔗 Backend integration with Spring Boot to process summaries  

---

## 🛠️ Tech Stack

### 🔷 Frontend
- HTML  
- CSS  
- JavaScript  
- Chrome Extension Files:
  - `manifest.json`

### 🔶 Backend
- Spring Boot (Java)  
- Dependencies used:
  - `spring-boot-starter-web`  
  - `spring-boot-starter-webflux`  
  - `spring-boot-devtools`  
  - Apache Tomcat (embedded via Spring Boot)  

### 🏗️ Architecture & Build
- Maven project structure  
- Chrome Local Storage API for saving notes

---


---

## 🔧 How It Works

1. **User installs the Chrome Extension** from the `extension/` folder.  
2. On selecting text on a webpage, the extension offers an option to **summarize** the content.  
3. The selected content is sent to the **Spring Boot backend**, which returns a concise summary.  
4. Users can optionally **write and save notes**, stored using **Chrome's Local Storage API**.  
5. Notes remain persistent across sessions and can be accessed anytime via the extension.

---


![image](https://github.com/user-attachments/assets/cd2a3d5a-45a1-4482-b130-98438b85b584)

![image](https://github.com/user-attachments/assets/97bb28ff-d958-4de8-829c-3160a3e10488)

![Uploading image.png…]()

![Uploading image.png…]()





---
## 🧠 Future Enhancements
AI-based advanced summarization (LLMs like GPT)

Tagging and organizing saved notes

Exporting notes to PDF/Markdown

User authentication and syncing across devices
---

## 📦 Installation & Setup

### Backend (Spring Boot)
```bash
cd backend
./mvnw spring-boot:run




