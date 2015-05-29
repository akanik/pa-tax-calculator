# Full Tax Calculator Methodology
At PublicSource, we strive to be as transparent about how we do our work as we ask our sources to be. We want to show our work on the tax calculator so that you can review our full methodology and spot any mistakes.

There are also lots of caveats and explanations that can’t make it into the story.

## Property tax calculations

Property taxes are the most complex portion of our tax calculator, even though it appears to be a series of simple calculations. Please keep in mind that many municipalities, school districts and counties each charge separate property taxes, so the tax calculator will not be indicative of your total tax bill. What we tried to demonstrate is how your tax bill might change under Gov. Tom Wolf’s proposal.

To get an estimate of how much you pay in property taxes, we take your property’s assessed value, multiply it by the millage, or property tax rate, and then subtract the homestead exemption.

The homestead exemption is a tax credit that reduces property taxes equally for every home in a school district. 
Some of the key figures we obtained were: 

We got the median value of all homestead properties for each school district and the number of homestead and farmstead properties from [Allegheny County](https://www.documentcloud.org/documents/1710427-2014-homesteads-by-school-district-hm999paall-as.html). 

We downloaded the [2014-15 state property tax reduction allocation](https://www.portal.state.pa.us/portal/server.pt/community/property_tax_relief/7452/property_tax_reduction_allocations/510335) from the Pennsylvania Department of Education. The state property tax reduction allocation is the amount of money that the state gives to each school district to reduce property taxes. To get the amount each homeowner will receive, you divide the reduction allocation, or the total amount of money from the state, by the number of homesteads in the district. 

Wolf also released the same information for his [2016-17 property tax relief estimates](http://www.portal.state.pa.us/portal/server.pt/community/education_budget/8699/schools_that_teach__2015-16_budget/539263%E2%80%8B) in an Excel spreadsheet.

Once you have all of those numbers, the first step is to calculate the tax bill for the median property in each school district. The reason to do that is the maximum homestead exemption, or maximum amount of property tax relief, [cannot be more than half of the assessed value](http://www.lgc.state.pa.us/deskbook06/Issues_Taxation_and_Finance_02_Homestead_Exemption.pdf) of the median property.

Out of 46 school districts in Allegheny County, 19 would receive enough money in 2016-17 to provide the maximum homestead exemption to every household. The Wolf administration estimates that 311 of the state’s 500 school districts will max out their homestead exemption.

Then take the maximum homestead exemption and multiply it by the number of homes to get how much it would cost the school district to fund the maximum tax credit for every household. 

Wolf’s mandate is that he wants each school district to take the state money and apply it first to the homestead exemption. If a school district receives more money than it costs to give the maximum homestead exemption to each household, then it must take the leftover money and reduce the property tax rate for all properties in the school district.

To figure how out much the property tax rate could be reduced, you have to figure out the value of each mill to a particular district. To do that, we took the 2012-13 total amount of property taxes collected, which is the most recent year available, and divided it by the property tax rate. If a district brought in $1 million in property taxes and they charged residents 10 mills, then the value of 1 mill would be $100,000.

If you take the pot of money left over for property tax relief and divide it by the value of 1 mill, then you get the number of mills that you can reduce property taxes by.

Then you have to go through several cycles of calculations where you figure out a new maximum homestead exemption based on the new lower millage, calculate the total cost of funding the new lower maximum homestead exemption for every home, see how much money is left over again for millage reduction and then reduce property tax again. 

You may have to do this cycle several times to get to the point where the money that you have left over roughly equals the amount it would take to fund the maximum homestead exemption.

At that point, you will have used all the money from the state to reduce property taxes, find the final property tax rate and a homestead exemption that can be fully funded.

## Property tax caveats and discrepancies

Most school districts in Allegheny County have a single millage, or property tax rate, and the tax calculator multiplies the millage by the assessed value of your home and then subtracts the homestead exemption to determine your property taxes. 

The one exception in Allegheny County is the Clairton City School District. They charge 7 mills on the value of the building and 75 mills on the value of the land. We estimate that 25 percent of a property’s value comes from the building and 75 percent of the value comes from the land, based on estimates from [Allegheny County’s community profile](http://www.alleghenycounty.us/munimap/profile.asp?muni=23) of Clairton City. 

When you use this constant 25/75 split, you can combine the two millages into a single number, which is what we did for the tax calculator. The value of every property in the Clairton City School District is made up of four equal parts, one taxed at 7 mills and three taxed at 75 mills. So you can add 7, 75, 75 and 75 together to get 232 and then divide by four to get a single value of 58 mills. 

Of course, every property in that district will not fit exactly along that 25/75 split, but it works for estimating purposes.
You can see [the property tax rates for every school district](http://www.county.allegheny.pa.us/treasurer/millsd.asp) in Allegheny County online.

We also included three school districts in our tax calculator that are primarily in Washington or Westmoreland counties, but also contain Allegheny County properties. They are the Fort Cherry, Penn-Trafford and Norwin school districts.

It’s also important to note several discrepancies between our calculations and the Wolf administration's calculations. 
The Wolf administration estimates, as we wrote in our story, that 28 school districts in the state would be able to completely eliminate property taxes under the governor's proposal. 

However, in 49 school districts, the state will be providing more money than the district received in property taxes in 2012-13. That’s in part why our tax calculator shows that property taxes in these districts would be completely eliminated.

It would make sense that property taxes in these districts would be eliminated because the state is dollar-for-dollar replacing property taxes with state money. 

But, not every house who is eligible for the maximum homestead exemption receives it. As we said, the maximum homestead exemption is half of the median assessed property value in a school district. However, if a property is worth less than the maximum homestead exemption, its assessed value is reduced to zero and the tax credit doesn’t actually come out of the homestead exemption pot of money.

For instance, Duquesne City SD had about $283,000 available in 2014-15 for the maximum homestead exemption, but they only paid out about $274,000.

The only correct way to calculate how much money a district would actually use is to have a list of all properties to be able to determine which properties would have their values reduced to zero and therefore not actually receive the homestead exemption tax credit.

The Wolf administration tried to do this by using the [Census Bureau’s Public Use Microdata Sample](http://www.census.gov/acs/www/data_documentation/public_use_microdata_sample/), which are anonymous individual records that can be used for statistical modeling.

It’s a more granular way to estimate property values for each school district. For instance, we estimate that five Allegheny County school districts will be able to eliminate property taxes while the Wolf administration says that number is just two. In the other three cases, Randy Albright, Pennsylvania’s secretary of the budget, said the administration estimated property taxes will be reduced by 86 to 94 percent.

Our estimates are relatively close to theirs, but neither our calculations nor the Wolf administrations are exact. It’s clear, however, that the people in those districts would likely see their property taxes nearly eliminated under the governor’s proposal.

## Income taxes

Income taxes in Pennsylvania are straightforward because most residents pay the same percentage of their income. Wolf has proposed raising that flat rate from 3.07 percent to 3.7 percent, which is a 20.5 percent increase.

One of the policies that we incorporated into our tax calculator was [Pennsylvania’s Tax Forgiveness Schedule](http://www.revenue.pa.gov/GeneralTaxInformation/Tax%20Types%20and%20Information/Pages/Personal%20Income%20Tax/Tax%20Forgiveness/Eligibility.aspx#.VRG-lGaR_JY). For people with low incomes, either all or a portion of your state income taxes can be forgiven. Currently, if you make under $6,500 as an individual or $32,000 as a married couple with two children, you don’t have to pay any state income taxes. 

The new proposed minimum is that individuals earning up to $8,700 and a married couple with two children earning up to $36,400 would pay no state income taxes.

There is also tax forgiveness for people who make slightly more than those figures. For every additional $250 of income, the tax forgiveness decreases in increments of 10 percent. For instance, an individual currently making $6,750 would have 90 percent of their state income tax bill forgiven. 

The tax forgiveness currently ends for individuals making more than $8,750 and a married couple with two children making more than $34,250. That would also increase to $10,950 for individuals and $38,650 for a married couple with two children under Wolf’s plan.

## Sales taxes

To estimate how much individuals and families pay in sales tax, we used the optional sales tax tables from [Internal Revenue Service tax tables Form 1040, Schedule A](http://www.irs.gov/pub/irs-pdf/i1040sca.pdf). The IRS publishes these tax tables as an estimate for people who itemize their deductions in each state.

The tax tables allow us to estimate sales tax based on income and the number of people in a household. The IRS estimates sales tax based on Pennsylvania’s current 6 percent state sales tax. Here in Allegheny County, however, we currently pay 7 percent sales tax so we need to [adjust their figures](https://docs.google.com/a/publicsource.org/spreadsheets/d/1CIA7j2cLlnlyci1mPvqVuOEfz4mpYdtz-5PnJUce4gM/edit?usp=drive_web).

Since the total costs of taxed goods multiplied by the tax rate equals the IRS estimated sales tax, we can change that formula around based on what we know. We know the estimated sales tax paid and the tax rate, but we need the total cost of taxed goods. To get that, we can divide both sides of the formula by the sales tax rate. Then our formula is the total cost of taxed goods equals estimated sales tax divided by sales tax rate.

We divided estimated paid sales tax by .06 to get the total cost of taxed goods. 

We then took that total cost of taxed goods and multiplied it by .07 to get the current estimated sales tax paid and .076 to get the estimated sales tax paid under Wolf’s plan.

We were going to use the Bureau of Labor Statistics' 2013 Consumer Expenditure Survey, which estimates spending across a variety of categories. This was going to allow us to not only account for the increase in the sales tax rate, but also the sales tax expansion to new goods and services.

However, we decided not to use this methodology because it required us to make too many judgement calls about whether to include categories that contained some goods that were taxed and some goods that were not taxed.

We want to thank our news partners at The Patriot-News who created [the first tax calculator](http://www.pennlive.com/politics/index.ssf/2015/03/wolf_taxes_budget_property_tax.html) for a multi-county region in Central Pennsylvania and Rich Exner of the Northeast Ohio Media Group for his advice on the Internal Revenue Service tax tables.

Update 5/31/2015

We received detailed information on Rep. Stan Saylor’s property tax relief plan as a PDF from the House GOP caucus. We converted it to a spreadsheet using Tabula. 

The Saylor plan raises the state sales tax from 6 to 7 percent and the state income tax from 3.07 to 3.7 percent. We made no changes to how we calculated the results of those two taxes.

The way that the Saylor plan deals with property tax relief dollars is different than Wolf’s. Instead of allocating all the property tax relief money first to the homestead exemption as Wolf does, the Saylor plan divides the money into two funds. One fund designates a portion of the state’s money to reduce the property tax rate, and the second fund designates money to fund the homestead exemption. 

Wolf’s plan funded the homestead exemption first and if there was money left over, his plan would reduce the property tax rate. By separating the money into two funds, it guaranteed that some amount of money would be able to reduce the property tax rate in each school district. 

The division of state money into two funds slightly changed our methodology. We added the amount of money in the homestead exemption fund to the amount of money each school district received in 2014-15, which was only designated for homestead exemption tax relief. Like Wolf’s plan, if a school district could provide more money than the cost of the maximum homestead exemption, in accordance with the proposed legislation, we transferred the extra money from the homestead fund to the millage fund. Then you can calculate the final millage and homestead exemption by following the same steps as in the Wolf plan.

We decided to eliminate the Fort Cherry School District from the tax calculator because it was producing incorrect results. The district is mostly in Washington County, and 111 homesteads of the districts 2,432 homesteads are in Allegheny County. We eliminated it from the tax calculator because millage rates and assessment values are calculated differently in Washington County than they are in Allegheny County. By using the Washington County millage rate and the median assessed value from Allegheny County for that district, we were incorrectly calculating the property taxes for all homesteads in that district based on accurate calculations for the 111 homesteads that are in Allegheny County.
