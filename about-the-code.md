# About the Code

This tax calculator is built using the [Ractive.js](http://ractivejs.org) javascript library and the [bootstrap theme](http://getbootstrap.com/). We wanted a user experience that would allow users to easily input and adjust the calculator parameters (marital status, income, property value, etc,) so that, in addition to exploring their own tax bill, they might also explore the tax bills of other Pennsylvanians.
For an explanation on the data behind the code, [jump over here](https://github.com/akanik/pa-tax-calculator/blob/master/about-the-data.md).

## The code explained

Basically, we are setting up a system where all changes made by the user are being watched. When something changes, the system notices and immediately adjusts the variables that calculate the tax bill.

Here is a breakdown of what happens when each user-input element is changed and an explanation of the functions used to calculate the tax bill.

### School District

School district information is stored in an object array. When a user chooses a school district from the select list, the index of the selected district is recorded so that the millage and homestead exemptions for both tax years can be identified and written to variables. Any time the school district is changed, those variables are updated.

Also, property tax is dependent on school district, so when the school district changes, we run the function that determines property tax.

### Homeownership

The homeOwnership variable is also watched for changes. When "Are you a homeowner?" is set to "Yes," we want to make sure the homeowner variable value is true (boolean). If it is set to "No," then we make sure that the property value (userPropValue) and property tax (propTax) are 0, since no property means no property value or tax. 

Also, property tax and rental rebate are dependent on homeOwnership, so if homeOwnership changes, run the functions that determine those things.

### Income

The userIncome variable is watched for changes. When the user selects an income using the slider, we set the userIncome variable. Income tax, sales tax and rental rebate are dependent on income, so if income changes, run the functions that determine those things.

### Marital status

Marital status is stored in an array to facilitate using a select list to choose a category. When a user chooses a status, we set the userMaritalStatus variable. Income tax and sales tax depend on userMaritalStatus as well, so run those functions if a change in userMaritalStatus value is detected.

### Property Value

The userPropValue variable is watched for changes. When the the value changes, set the userPropValue variable to the value of the slider. If there is no user input (if the variable is undefined), set the value to 0 so that it isn't used in calculations. Property tax is determined by userPropValue, so run that function when a change is detected.

### Property tax function

This function is used to determine the property tax. First, make sure the user is a homeowner and has selected a school district. If they have, set the property tax variable (propTax) to this calculation: userPropValue times school.millage minus school.homesteadExemption. If the user is not a homeowner or if the property tax is going to be negative, set the property tax variable to 0.

Do this for each tax year.

### Income tax function

This function is used to determine the income tax bracket (for purposes of tax forgiveness) and the income tax. The income tax bracket a user falls into depends on their marital status and their income level. Once income bracket is determined, a percentage is returned. That percentage is used in the income tax calculation, which is: (userIncome times incomeTaxRate) times percIncomeTax.

Do this for each tax year.

### Sales tax function

This function is used to determine the estimated sales tax a person or household might pay over the course of a tax year. The sales tax values are based on the Internal Revenue Service tax tables from Form 1040, Schedule A. Depending on the number of people in your household and your income, you are assigned an estimated sales tax for both tax years.

### Renter rebate function

You can only get the rental rebate if you don't own a home and if your income is less than $50,000. If those conditions are met, then set the rentCredit variable to $500. This rebate is not available for 2014-15 tax year.
