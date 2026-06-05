// Simple mock slide array to show interaction
const mockReviews = [
  {
    text: "Roof repairs can be a real headache, but HomePro makes it easy! Their roofing team turned my leaky roof into a stockade. With their craftsmanship and the best materials, my house is now ready to weather any storm.",
    name: "Kende Attila",
    stars: 4
  },
  {
    text: "Incredible quick turnaround! Called them late at night for an emergency plumbing block, and they resolved it beautifully. Strongly recommend.",
    name: "Alex Rivera",
    stars: 5
  }
];

let currentIndex = 0;
const dots = document.querySelectorAll('.dot');
const textEl = document.querySelector('.testimonial-text');
const nameEl = document.querySelector('.reviewer-details h3');

// Simple sync behavior for dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
    
    // Switch data if index exists in mock data array
    if(mockReviews[index]) {
      textEl.textContent = `"${mockReviews[index].text}"`;
      nameEl.textContent = mockReviews[index].name;
    }
  });
});


document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const currentItem = header.parentElement;
    const isCurrentlyActive = currentItem.classList.contains('active');
    
    // 1. Close all open accordion panels 
    document.querySelectorAll('.accordion-item').forEach(item => {
      item.classList.remove('active');
      item.querySelector('.accordion-collapse').style.maxHeight = null;
    });
    
    // 2. If the clicked element wasn't active, activate it
    if (!isCurrentlyActive) {
      currentItem.classList.add('active');
      const collapseWrapper = currentItem.querySelector('.accordion-collapse');
      // Setting max-height dynamically dynamically ensures transition animations fire
      collapseWrapper.style.maxHeight = collapseWrapper.scrollHeight + "px";
    }
  });
});

// Run calculation once on load to render the pre-opened panel correctly
document.addEventListener("DOMContentLoaded", () => {
  const activeCollapse = document.querySelector('.accordion-item.active .accordion-collapse');
  if (activeCollapse) {
    activeCollapse.style.maxHeight = activeCollapse.scrollHeight + "px";
  }
});