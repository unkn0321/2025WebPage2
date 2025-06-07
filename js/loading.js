function createLoadingBar() {
    const loadingContainer = document.createElement('div');
    loadingContainer.className = 'loadingContainer';
    
    const loadingBar = document.createElement('div');
    loadingBar.className = 'loadingBar';
    
    // 新增：創建百分比顯示元素
    const loadingPercentage = document.createElement('div');
    loadingPercentage.className = 'loadingPercentage';
    loadingPercentage.textContent = '0%';
    
    const loadingProgress = document.createElement('div');
    loadingProgress.className = 'loadingProgress';
    
    loadingBar.appendChild(loadingProgress);
    loadingContainer.appendChild(loadingPercentage); // 添加百分比顯示
    loadingContainer.appendChild(loadingBar);
    document.body.appendChild(loadingContainer);
    
    return { loadingContainer, loadingProgress, loadingPercentage };
}

document.addEventListener('DOMContentLoaded', () => {
    const { loadingContainer, loadingProgress, loadingPercentage } = createLoadingBar();
    let progress = 0;
    
    const updateProgress = () => {
        progress += (100 - progress) * 0.1;
        const displayProgress = Math.min(Math.round(progress), 99);
        loadingProgress.style.width = `${progress}%`;
        loadingPercentage.textContent = `${displayProgress}%`; // 更新百分比顯示
        
        if (progress < 99) {
            requestAnimationFrame(updateProgress);
        }
    };
    
    updateProgress();
    
    window.addEventListener('load', () => {
        loadingProgress.style.width = '100%';
        loadingPercentage.textContent = '100%'; // 設置最終進度
        setTimeout(() => {
            loadingContainer.style.opacity = '0';
            loadingContainer.style.transition = 'opacity 0.3s';
            setTimeout(() => {
                document.body.removeChild(loadingContainer);
                // 在這裡啟動動畫
                startPageAnimations();
            }, 300);
        }, 500);
    });
});

// 添加新的啟動動畫函數
function startPageAnimations() {
    const animatedElements = document.querySelectorAll('.titleArea, .titleArea h1, .titleArea h4, .line, .navArea, .navArea a');
    animatedElements.forEach(element => {
        element.classList.add('animation-ready');
    });
}