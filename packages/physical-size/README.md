# @kitsuyui/react-physical-size

I want to get the physical size of the device.
But this package is meaningless. Because PPI is constant value for each device.
In CSS definition, 1in is always 96px. So PPI = sqrt(96 * 96) = 96.
https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units

I recommend you to use just `calc()` function in CSS.

Why do I keep it? Just for curiosity.
