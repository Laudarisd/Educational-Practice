// JavaScript code to handle training feature selection
document.addEventListener('DOMContentLoaded', function() {
    var selectedFeatures = [];

    // Add click event listener to training feature items
    var trainingFeatureItems = document.getElementsByClassName('training-feature');
    Array.prototype.forEach.call(trainingFeatureItems, function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            var selectedFeature = event.target.getAttribute('data-value');
            if (selectedFeatures.includes(selectedFeature)) {
                // Remove the selected feature if already chosen
                selectedFeatures = selectedFeatures.filter(function(feature) {
                    return feature !== selectedFeature;
                });
            } else {
                // Add the selected feature
                selectedFeatures.push(selectedFeature);
            }
            updateSelectedTrainingFeatures();
        });
    });

    // Update the selected training features in the dropdown button and display box
    function updateSelectedTrainingFeatures() {
        var dropdownButton = document.getElementById('training-features-dropdown');
        var selectedFeaturesList = document.getElementById('selected-features-list');

        // Update dropdown button text
        if (selectedFeatures.length > 0) {
            dropdownButton.textContent = 'Selected Features (' + selectedFeatures.length + ')';
        } else {
            dropdownButton.textContent = 'Select Training Features';
        }

        // Clear the selected features display box
        selectedFeaturesList.innerHTML = '';

        // Update selected features in the display box
        selectedFeatures.forEach(function(feature) {
            var featureItem = document.createElement('li');
            featureItem.textContent = feature;
            featureItem.classList.add('selected-feature');
            featureItem.addEventListener('click', function() {
                // Remove the selected feature on click
                selectedFeatures = selectedFeatures.filter(function(selected) {
                    return selected !== feature;
                });
                updateSelectedTrainingFeatures();
            });
            selectedFeaturesList.appendChild(featureItem);
        });
    }
});