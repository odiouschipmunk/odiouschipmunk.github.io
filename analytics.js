// Simple analytics for dual-mode usage tracking
class PortfolioAnalytics {
    constructor() {
        this.sessionId = this.generateSessionId();
        this.events = [];
        this.startTime = Date.now();
    }

    generateSessionId() {
        return 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    }

    trackEvent(eventType, eventData = {}) {
        const event = {
            sessionId: this.sessionId,
            timestamp: Date.now(),
            type: eventType,
            data: eventData,
            url: window.location.href,
            userAgent: navigator.userAgent.substr(0, 100) // Truncated for privacy
        };
        
        this.events.push(event);
        
        // Store in localStorage for persistence
        this.saveToLocalStorage();
        
        // Console log for development (remove in production)
        console.log('Analytics Event:', event);
    }

    saveToLocalStorage() {
        try {
            const existingData = JSON.parse(localStorage.getItem('portfolio_analytics') || '[]');
            const allEvents = [...existingData, ...this.events];
            
            // Keep only last 100 events to prevent storage bloat
            const recentEvents = allEvents.slice(-100);
            
            localStorage.setItem('portfolio_analytics', JSON.stringify(recentEvents));
            this.events = []; // Clear current events after saving
        } catch (error) {
            console.log('Analytics storage error:', error);
        }
    }

    trackModeChoice(mode) {
        this.trackEvent('mode_selected', { mode: mode });
    }

    trackModeSwitch(fromMode, toMode) {
        this.trackEvent('mode_switched', { from: fromMode, to: toMode });
    }

    trackPageView(page) {
        this.trackEvent('page_view', { page: page });
    }

    trackProjectView(project) {
        this.trackEvent('project_viewed', { project: project });
    }

    trackVideoInteraction(action, video) {
        this.trackEvent('video_interaction', { action: action, video: video });
    }

    getAnalyticsSummary() {
        const data = JSON.parse(localStorage.getItem('portfolio_analytics') || '[]');
        
        const summary = {
            totalEvents: data.length,
            modeSelections: data.filter(e => e.type === 'mode_selected'),
            modeSwitches: data.filter(e => e.type === 'mode_switched'),
            pageViews: data.filter(e => e.type === 'page_view'),
            projectViews: data.filter(e => e.type === 'project_viewed')
        };
        
        return summary;
    }
}

// Initialize analytics
const analytics = new PortfolioAnalytics();

// Track page load
document.addEventListener('DOMContentLoaded', function() {
    const pageName = document.title || window.location.pathname;
    analytics.trackPageView(pageName);
});

// Export for global use
window.portfolioAnalytics = analytics;
