document.addEventListener("DOMContentLoaded", () => {
    const startVideoButton = document.querySelector("button#start_video")
    const stopVideoButton = document.querySelector("button#stop_video")


    startVideoButton.addEventListener("click", () => {
        console.log('Start Video Button Clicked');
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "request_recording" }, function(response) {
                if (!chrome.runtime.lastError) {
                    console.log(response)
                } else {
                    console.log(chrome.runtime.lastError, 'error line 14')
                }
            })
        })
    })


    stopVideoButton.addEventListener("click", () => {
        console.log('Stop Video Button Clicked');
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "stopvideo" }, function(response) {
                if (!chrome.runtime.lastError) {
                    console.log(response)
                } else {
                    console.log(chrome.runtime.lastError, 'error line 27')
                }
            })
        })
    })
})