function createLoadingBar() {
    const loadingContainer = document.createElement('div');// 創建loading時的全屏容器
    loadingContainer.className = 'loadingContainer';// 定義其class為loadingContainer
    
    const loadingBar = document.createElement('div');// 創建loading條的容器
    loadingBar.className = 'loadingBar';// 定義其class為loadingBar
    
    const loadingPercentage = document.createElement('div');// 創建同步顯示loading進度的文字元素
    loadingPercentage.className = 'loadingPercentage';// 定義其class為loadingPercentage
    loadingPercentage.textContent = '0%';// 設定初始文字內容
    
    const loadingProgress = document.createElement('div');// 創建loading當前進度條
    loadingProgress.className = 'loadingProgress';// 定義其class為loadingProgress
    loadingProgress.style.width = '0%';// 設定初始寬度為0%

    document.body.appendChild(loadingContainer);// 在body中新增一個子節點給loadingContainer(父子節點關係設定)
    loadingContainer.appendChild(loadingBar); // 在loadingContainer中新增一個子節點給loadingBar(父子節點關係設定)
    loadingBar.appendChild(loadingProgress);// 在loadingBar中新增一個子節點給loadingProgress(父子節點關係設定)
    loadingContainer.appendChild(loadingPercentage); // 在loadingContainer中新增一個子節點給loadingPercentage(父子節點關係設定)

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