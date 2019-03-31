#!/usr/bin/env python3

# display a welcome message
print("The Miles Per Gallon program")
print()

# get input from the user
miles_driven= float(input("Enter miles driven:\t\t"))
gallons_used = float(input("Enter gallons of gas used:\t"))
cost_per_gallon = float(input("Enter cost per gallon:\t"))

# calculate miles per gallon
mpg = miles_driven / gallons_used
mpg = round(mpg, 1)

#Total Cost of Gas
Total_cost_of_gas = (cost_per_gallon * gallons_used)
Total_cost_of_gas = round(Total_cost_of_gas, 2)

# calculate cost per mile
cost_per_mile = (Total_cost_of_gas / miles_driven)

            
# format and display the result
print()
print("Miles Per Gallon:\t\t" + str(mpg))
print("Total Gas Cost:\t\t\t" + str(Total_cost_of_gas))
print("Cost Per Mile:\t\t\t" + str(cost_per_mile))
print("Bye")


