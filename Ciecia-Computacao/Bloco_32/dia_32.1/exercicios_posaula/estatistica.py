from collections import Counter

class Estatistica:
  @classmethod
  def media(cls, numbers):
    return sum(numbers) / len(numbers)
  
  @classmethod
  def mediana(cls, numbers):
    numbers.sort()
    index = len(numbers) // 2
    if len(numbers) % 2 == 0:
      return (numbers[index - 1] + numbers[index]) / 2
    
    return numbers[index]
  
  @classmethod
  def moda(cls, numbers):
      number, _ = Counter(numbers).most_common()[0]
      return number


print(Estatistica.media([5, 1]))
print(Estatistica.mediana([1, 2, 3 ]))
print(Estatistica.moda([1, 1 ,2 ,2 ,2 ,3]))