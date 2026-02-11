// Developer Easter Egg
document.addEventListener('DOMContentLoaded', function() {
    // Console art and message for curious developers
    const consoleStyle = 'color: #667eea; font-weight: bold; font-size: 16px;';
    const consoleStyleSmall = 'color: #764ba2; font-size: 12px;';
    
    console.log('%c🎮 ODIOUSCHIPMUNK PORTFOLIO 💼', consoleStyle);
    console.log('%cWelcome, fellow developer! 👋', consoleStyleSmall);
    console.log('%cYou\'ve discovered the dual-mode portfolio system.', consoleStyleSmall);
    console.log('%cBuilt with: HTML5, CSS3, JavaScript ES6+', consoleStyleSmall);
    console.log('%cFeatures: Computer Vision, Machine Learning, Web Development', consoleStyleSmall);
    console.log('%c📊 Check out analytics summary with: portfolioAnalytics.getAnalyticsSummary()', consoleStyleSmall);
    console.log('%c🔄 Type "switchMode()" to see available mode switching options', consoleStyleSmall);
    
    // Global function for developers to explore
    window.switchMode = function() {
        const currentPath = window.location.pathname;
        const suggestions = [];
        
        if (currentPath.includes('professional') || currentPath === '/professional.html') {
            suggestions.push('🎮 Try arcade mode: window.location = "arcade.html"');
            suggestions.push('🎯 ParamSquash: window.open("https://paramsquash.com", "_blank")');
        } else if (currentPath.includes('arcade') || currentPath === '/arcade.html') {
            suggestions.push('💼 Try professional mode: window.location = "professional.html"');
            suggestions.push('📊 ParamSquash: window.open("https://paramsquash.com", "_blank")');
        } else {
            suggestions.push('🎯 Start at choice page: window.location = "choice.html"');
        }
        
        console.log('%cMode Switching Options:', consoleStyle);
        suggestions.forEach(suggestion => {
            console.log('%c' + suggestion, consoleStyleSmall);
        });
    };
    
    // Hidden konami code easter egg
    let konamiCode = [];
    const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konami.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konami.join(',')) {
            console.log('%c🎉 KONAMI CODE ACTIVATED! 🎉', 'color: #ff6b6b; font-size: 20px; font-weight: bold;');
            console.log('%c🚀 You unlocked developer mode insights!', 'color: #4ecdc4; font-size: 14px;');
            console.log('%c📈 Portfolio Performance:', 'color: #45b7d1; font-weight: bold;');
            console.log('• Dual-mode architecture reduces bounce rate');
            console.log('• Computer vision project showcases technical depth');
            console.log('• Responsive design supports all device types');
            console.log('• Professional mode optimized for business contexts');
            console.log('• Arcade mode demonstrates creative capabilities');
            konamiCode = []; // Reset
        }
    });
});

// Performance monitoring
window.addEventListener('load', function() {
    if (window.performance) {
        const loadTime = performance.now();
        console.log(`%c⚡ Page loaded in ${Math.round(loadTime)}ms`, 'color: #27ae60; font-weight: bold;');
    }
});
