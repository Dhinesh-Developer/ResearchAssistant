document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get(['researchNotes'], function(results) {
    if (results.researchNotes) {
      document.getElementById('notes').value = results.researchNotes;
    }
  });

  document.getElementById('summarizeBtn').addEventListener('click', summarizeText);
  document.getElementById('saveNotesBtn').addEventListener('click', saveNotes);
});

async function summarizeText() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => window.getSelection().toString()
    });

    if (!result) {
      showResults('Please select some text first');
      return;
    }

    const response = await fetch('http://localhost:8080/api/research/process', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: result, operation: 'summarize' })
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const text = await response.text();
    showResults(text.replace(/\n/g, '<br>'));

  } catch (error) {
    showResults('Error: ' + error.message);
  }
}

function saveNotes() {
  const notes = document.getElementById('notes').value;
  chrome.storage.local.set({ 'researchNotes': notes }, function() {
    alert('Notes saved successfully');
  });
}

function showResults(content) {
  document.getElementById('results').innerHTML = `
    <div class="results-item">
      <div class="result-content">${content}</div>
    </div>`;
}
