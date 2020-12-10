class game():
    def __init__(self, n):
        self.stacks = [[i for i in range(n, 0, -1)], [], []]
        self.mov_count = 0
        
    def move(self, origin, dest):
        e = self.stacks[origin].pop()
        self.stacks[dest].append(e)
        self.mov_count += 1
        self.print()
    
    def print(self):
        s0 = "{:<10}".format("".join(map(str, self.stacks[0])))
        s1 = "{:<10}".format("".join(map(str, self.stacks[1])))
        s2 = "{:<10}".format("".join(map(str, self.stacks[2])))
        print("{:<2} [{}] [{}] [{}]".format(self.mov_count, s0, s1, s2))
        
    def _solve(self, n, origin, dest, aux):
        if n > 1: self._solve(n - 1, origin, aux, dest)
        self.move(origin, dest)
        if n > 1: self._solve(n - 1, aux, dest, origin)
        
    def solve(self):
        self.mov_count = 0
        n = self.stacks[0][0]
        print("hanoi solve n={}".format(n))
        self.print()
        self._solve(n, 0, 2, 1)
        
        
g1 =  game(4)
g1.solve()
    



