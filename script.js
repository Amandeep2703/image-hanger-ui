document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-btn");
    const container = document.querySelector(".container");
    const imageInput = document.getElementById("image-input");
    let hangCount = 1; // Counter to track hang class numbers

    addButton.addEventListener("click", function() {
        // Trigger click event on hidden image input element
        imageInput.click();
    });

    // Event listener for image input change
    imageInput.addEventListener("change", function() {
        // Get selected images
        const selectedImages = Array.from(imageInput.files);

        if (selectedImages.length >= 1) {
            // Create a new "hang" div
            const newHang = document.createElement("div");
            newHang.classList.add("hang");
            newHang.classList.add("hang" + hangCount);
            newHang.classList.add("shift-left"); // Apply the shift-left class

            for (let i = 1; i <= 5; i++) {
                const newDiv = document.createElement("div");
                newDiv.classList.add("div" + i);
                newHang.appendChild(newDiv);
            }

            // Create image elements and insert them into the first and fifth divs
            const image1 = document.createElement("img");
            image1.src = URL.createObjectURL(selectedImages[0]);
            newHang.querySelector(".div1").appendChild(image1);

            const image2 = document.createElement("img");
            image2.src = URL.createObjectURL(selectedImages[0]);  // 1 -> 0
            newHang.querySelector(".div5").appendChild(image2);

            // Append new hang to container
            container.appendChild(newHang);

            // Update hangCount and assign appropriate class
            hangCount++;
            if (hangCount > 8) {
                hangCount = 1; // Reset hangCount after every 8 children
            }

            // Scroll to the newly created child
            newHang.scrollIntoView({ behavior: "smooth", block: "nearest" });

            // Clear the input field to allow selecting new images
            imageInput.value = null;
        } else {
            alert("Please select at least two images.");
        }
    });
});
