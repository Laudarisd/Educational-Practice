// Test script to verify backend functionality
const testUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Rick Roll for testing

async function testBackend() {
    try {
        console.log('🧪 Testing backend API...');
        
        // Test video info endpoint
        console.log('1. Testing video info endpoint...');
        const infoResponse = await fetch('http://localhost:3001/api/video-info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: testUrl }),
        });
        
        const infoData = await infoResponse.json();
        console.log('📊 Video info response:', infoData);
        
        // Test download endpoint
        console.log('2. Testing download endpoint...');
        const downloadResponse = await fetch('http://localhost:3001/api/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url: testUrl,
                format: 'video',
                quality: 'best'
            }),
        });
        
        const downloadData = await downloadResponse.json();
        console.log('⬇️ Download response:', downloadData);
        
        console.log('✅ Backend tests completed!');
        
    } catch (error) {
        console.error('❌ Backend test failed:', error);
    }
}

// Run the test
testBackend();
