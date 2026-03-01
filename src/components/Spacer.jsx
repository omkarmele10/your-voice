import React from 'react';

// यह कंपोनेंट Navbar की ऊँचाई के बराबर एक खाली जगह (spacer) बनाता है।
// h-16 (64px) का उपयोग किया गया है क्योंकि यह आपके Navbar की अनुमानित ऊँचाई से मेल खाता है।
const Spacer = () => {
    return <div className="h-16 bg-[#404040] w-full flex-shrink-0" aria-hidden="true" />;
};

export default Spacer;