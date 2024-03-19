report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../test-htmlcss/reference/hero-desktop.png",
        "test": "../bitmaps_test/20240320-013514/hero-desktop.png",
        "selector": "[data-test=\"hero\"]",
        "fileName": "hero-desktop.png",
        "label": "hero",
        "requireSameDimensions": true,
        "misMatchThreshold": 3,
        "url": "file:///Users/kybikn/Documents/Programming/Проекты/task-test/task-htmlcss/index.html",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0,
          "misMatchPercentage": "0.00",
          "analysisTime": 141
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../../test-htmlcss/reference/hero-tablet.png",
        "test": "../bitmaps_test/20240320-013514/hero-tablet.png",
        "selector": "[data-test=\"hero\"]",
        "fileName": "hero-tablet.png",
        "label": "hero",
        "requireSameDimensions": true,
        "misMatchThreshold": 3,
        "url": "file:///Users/kybikn/Documents/Programming/Проекты/task-test/task-htmlcss/index.html",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 5.889233117816092,
          "misMatchPercentage": "5.89",
          "analysisTime": 221
        },
        "diffImage": "../bitmaps_test/20240320-013514/failed_diff_hero-tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../../test-htmlcss/reference/hero-mobile.png",
        "test": "../bitmaps_test/20240320-013514/hero-mobile.png",
        "selector": "[data-test=\"hero\"]",
        "fileName": "hero-mobile.png",
        "label": "hero",
        "requireSameDimensions": true,
        "misMatchThreshold": 4,
        "url": "file:///Users/kybikn/Documents/Programming/Проекты/task-test/task-htmlcss/index.html",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 3.0893333333333333,
          "misMatchPercentage": "3.09",
          "analysisTime": 78
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../../test-htmlcss/reference/hero-overflow-desktop.png",
        "test": "../bitmaps_test/20240320-013514/hero-overflow-desktop.png",
        "selector": "[data-test=\"hero\"]",
        "fileName": "hero-overflow-desktop.png",
        "label": "hero-overflow",
        "requireSameDimensions": true,
        "misMatchThreshold": 3,
        "url": "file:///Users/kybikn/Documents/Programming/Проекты/task-test/task-htmlcss/index.html",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 1.2259114583333333,
          "misMatchPercentage": "1.23",
          "analysisTime": 186
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../../test-htmlcss/reference/hero-underflow-tablet.png",
        "test": "../bitmaps_test/20240320-013514/hero-underflow-tablet.png",
        "selector": "[data-test=\"hero\"]",
        "fileName": "hero-underflow-tablet.png",
        "label": "hero-underflow",
        "requireSameDimensions": true,
        "misMatchThreshold": 3,
        "url": "file:///Users/kybikn/Documents/Programming/Проекты/task-test/task-htmlcss/index.html",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 2.5095896677927927,
          "misMatchPercentage": "2.51",
          "analysisTime": 91
        }
      },
      "status": "pass"
    }
  ]
});