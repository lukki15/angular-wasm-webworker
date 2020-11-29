#include <stdio.h>
#include <emscripten/bind.h>

using namespace emscripten;

unsigned int fibonacciWASM(const unsigned int n)
{
    if (n < 2)
    {
        return n;
    }

    return fibonacciWASM(n - 1) + fibonacciWASM(n - 2);
}

int main()
{
}

EMSCRIPTEN_BINDINGS(my_module)
{
    function("fibonacciWASM", &fibonacciWASM);
}