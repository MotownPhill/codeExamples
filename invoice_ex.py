~class Invoice:
  def __init__(self, client, total):
    self.client = client
    self.total = total

  def formatter(self):
    return f'{self.client} owes: ${self.total}'

  @property
   def client(self):
        return self._client

   @client.setter
   def client(self, client):
        self._client = client

   @property
   def total(self):
        return self._total
		
		
google = Invoice('Google', 100)
snapchat = Invoice('SnapChat', 200)

print(google.formatter)
print(snapchat.formatter)

