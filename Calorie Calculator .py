calories_ttl = 0
running = True
while running:
  add = input("What's one food ate eat today? ")
  calories = int(input("how many calories was that? ")
  calories_ttl += calories
  finished = input("Is this all you ate today? Yes or No.")
  if finished == "yes" or "Yes":
    running = False
  else:
    running = True

print("Congrats, you ate " + calories_ttl + " calories today!")
