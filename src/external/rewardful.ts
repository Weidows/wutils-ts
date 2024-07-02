function RewardfulPlugin(options: { key: string; jsSrc: string }) {
  // Add rewardful's function to the head
  // As per their documentation, this function should go first
  const script = document.createElement('script');
  script.text =
    "(function(w,r){w._rwq=r;w[r]=w[r]||function(){(w[r].q=w[r].q||[]).push(arguments)}})(window,'rewardful');";
  document.head.appendChild(script);

  // Include rewardful's src js to the head
  const plugin = document.createElement('script');
  plugin.id = 'rewardful-js';

  if (options.jsSrc) plugin.setAttribute('src', options.jsSrc);
  else plugin.setAttribute('src', 'https://r.wdfl.co/rw.js');

  plugin.setAttribute('data-rewardful', options.key);
  plugin.async = true;
  document.head.appendChild(plugin);

  console.log('[Rewardful] pluggin initiated');
}

export { RewardfulPlugin };
