/* ==========================================================
   MAIN.JS - 實體書 Z-index 與翻頁引擎
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const leaves = document.querySelectorAll('.leaf');
    let totalLeaves = leaves.length;

    // 初始化每一頁的 Z-index (第一頁在最上面)
    leaves.forEach((leaf, index) => {
        leaf.style.zIndex = totalLeaves - index;

        // 點擊事件：翻頁邏輯
        leaf.addEventListener('click', function() {
            if (this.classList.contains('flipped')) {
                // 向前翻 (右翻左)
                this.classList.remove('flipped');
                // 延遲一下讓動畫順暢，再改變 z-index
                setTimeout(() => {
                    this.style.zIndex = totalLeaves - index;
                }, 400); 
            } else {
                // 向後翻 (左翻右)
                this.classList.add('flipped');
                setTimeout(() => {
                    this.style.zIndex = index + 1;
                }, 400);
            }
        });
    });
});