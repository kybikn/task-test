report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../test-htmlcss/reference/hero-desktop.png",
        "test": "../bitmaps_test/20240319-214036/hero-desktop.png",
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
          "analysisTime": 107
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../../test-htmlcss/reference/hero-tablet.png",
        "test": "../bitmaps_test/20240319-214036/hero-tablet.png",
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
          "rawMisMatchPercentage": 3.5008081896551726,
          "misMatchPercentage": "3.50",
          "analysisTime": 289
        },
        "diffImage": "../bitmaps_test/20240319-214036/failed_diff_hero-tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../../test-htmlcss/reference/hero-mobile.png",
        "test": "../bitmaps_test/20240319-214036/hero-mobile.png",
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
          "rawMisMatchPercentage": 26.497999999999998,
          "misMatchPercentage": "26.50",
          "analysisTime": 402
        },
        "diffImage": "../bitmaps_test/20240319-214036/failed_diff_hero-mobile.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../../test-htmlcss/reference/hero-overflow-desktop.png",
        "test": "../bitmaps_test/20240319-214036/hero-overflow-desktop.png",
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
          "analysisTime": 190
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../../test-htmlcss/reference/hero-underflow-tablet.png",
        "test": "../bitmaps_test/20240319-214036/hero-underflow-tablet.png",
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
          "rawMisMatchPercentage": 7.486979166666667,
          "misMatchPercentage": "7.49",
          "analysisTime": 495
        },
        "diffImage": "../bitmaps_test/20240319-214036/failed_diff_hero-underflow-tablet.png"
      },
      "status": "fail"
    }
  ]
});