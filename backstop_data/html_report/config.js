report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../test-htmlcss/reference/hero-strict-desktop.png",
        "test": "../bitmaps_test/20240320-221457/hero-strict-desktop.png",
        "selector": "[data-test=\"hero\"]",
        "fileName": "hero-strict-desktop.png",
        "label": "hero-strict",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "file:///Users/kybikn/Documents/Programming/Проекты/task-test/task-htmlcss/index.html",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.004231770833333334,
          "misMatchPercentage": "0.00",
          "analysisTime": 132
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../../test-htmlcss/reference/hero-strict-tablet.png",
        "test": "../bitmaps_test/20240320-221457/hero-strict-tablet.png",
        "selector": "[data-test=\"hero\"]",
        "fileName": "hero-strict-tablet.png",
        "label": "hero-strict",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "file:///Users/kybikn/Documents/Programming/Проекты/task-test/task-htmlcss/index.html",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.011898347701149425,
          "misMatchPercentage": "0.01",
          "analysisTime": 47
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../../test-htmlcss/reference/hero-strict-mobile.png",
        "test": "../bitmaps_test/20240320-221457/hero-strict-mobile.png",
        "selector": "[data-test=\"hero\"]",
        "fileName": "hero-strict-mobile.png",
        "label": "hero-strict",
        "requireSameDimensions": true,
        "misMatchThreshold": 2,
        "url": "file:///Users/kybikn/Documents/Programming/Проекты/task-test/task-htmlcss/index.html",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.24266666666666667,
          "misMatchPercentage": "0.24",
          "analysisTime": 43
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../../test-htmlcss/reference/hero-overflow-strict-desktop.png",
        "test": "../bitmaps_test/20240320-221457/hero-overflow-strict-desktop.png",
        "selector": "[data-test=\"hero\"]",
        "fileName": "hero-overflow-strict-desktop.png",
        "label": "hero-overflow-strict",
        "requireSameDimensions": true,
        "misMatchThreshold": 1.5,
        "url": "file:///Users/kybikn/Documents/Programming/Проекты/task-test/task-htmlcss/index.html",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 1.2301432291666665,
          "misMatchPercentage": "1.23",
          "analysisTime": 132
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../../test-htmlcss/reference/hero-underflow-strict-tablet.png",
        "test": "../bitmaps_test/20240320-221457/hero-underflow-strict-tablet.png",
        "selector": "[data-test=\"hero\"]",
        "fileName": "hero-underflow-strict-tablet.png",
        "label": "hero-underflow-strict",
        "requireSameDimensions": true,
        "misMatchThreshold": 1.5,
        "url": "file:///Users/kybikn/Documents/Programming/Проекты/task-test/task-htmlcss/index.html",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 10.43360254786036,
          "misMatchPercentage": "10.43",
          "analysisTime": 140
        },
        "diffImage": "../bitmaps_test/20240320-221457/failed_diff_hero-underflow-strict-tablet.png"
      },
      "status": "fail"
    }
  ]
});