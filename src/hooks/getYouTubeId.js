export function getYouTubeId(url) {
    try {
        const parsed = new URL(url);
        
        if (parsed.hostname === "youtu.be") {
            return parsed.pathname.slice(1);
        }
        
        if (
            parsed.hostname === "www.youtube.com" ||
            parsed.hostname === "youtube.com" ||
            parsed.hostname === "m.youtube.com"
        ) {
            return (
                parsed.searchParams.get("v") ||
                parsed.pathname.match(/^\/(?:shorts|embed)\/([^/]+)/)?.[1] ||
                null
            );
        }
        
        return null;
    } catch {
        return null;
    }
}