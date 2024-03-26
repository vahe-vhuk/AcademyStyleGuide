



const code1 = "#ifndef FOO_BAR_BAZ_H_\n" +
    "#define FOO_BAR_BAZ_H_\n" +
    "\n" +
    "...\n" +
    "\n" +
    "#endif  // FOO_BAR_BAZ_H_";

const code2 = "// In a C++ source file:\n" +
    "class B;\n" +
    "void FuncInB();\n" +
    "extern int variable_in_b;\n" +
    "ABSL_DECLARE_FLAG(flag_in_b);\n";

const code3 = "// b.h:\n" +
    "struct B {};\n" +
    "struct D : B {};\n" +
    "\n" +
    "// good_user.cc:\n" +
    "#include \"b.h\"\n" +
    "void f(B*);\n" +
    "void f(void*);\n" +
    "void test(D* x) { f(x); }  // Calls f(B*)";

const code4 = "#include \"base/logging.h\"";

const code5 = "#include \"foo/server/fooserver.h\"\n" +
    "\n" +
    "#include <sys/types.h>\n" +
    "#include <unistd.h>\n" +
    "\n" +
    "#include <string>\n" +
    "#include <vector>\n" +
    "\n" +
    "#include \"base/basictypes.h\"\n" +
    "#include \"foo/server/bar.h\"\n" +
    "#include \"third_party/absl/flags/flag.h\"\n";


const code6 = "#include \"foo/public/fooserver.h\"\n" +
    "\n" +
    "#include \"base/port.h\"  // For LANG_CXX11.\n" +
    "\n" +
    "#ifdef LANG_CXX11\n" +
    "#include <initializer_list>\n" +
    "#endif  // LANG_CXX11\n";

const code7 = "namespace outer {\n" +
    "inline namespace inner {\n" +
    "  void foo();\n" +
    "}  // namespace inner\n" +
    "}  // namespace outer\n"


const code8 = "// In the .h file\n" +
    "namespace mynamespace {\n" +
    "\n" +
    "// All declarations are within the namespace scope.\n" +
    "// Notice the lack of indentation.\n" +
    "class MyClass {\n" +
    " public:\n" +
    "  ...\n" +
    "  void Foo();\n" +
    "};\n" +
    "\n" +
    "}  // namespace mynamespace\n" +
    "\n" +
    "\n" +
    "// In the .cc file\n" +
    "namespace mynamespace {\n" +
    "\n" +
    "// Definition of functions is within scope of the namespace.\n" +
    "void MyClass::Foo() {\n" +
    "  ...\n" +
    "}\n" +
    "\n" +
    "}  // namespace mynamespace\n";

const code9 = "#include \"a.h\"\n" +
    "\n" +
    "ABSL_FLAG(bool, someflag, false, \"a flag\");\n" +
    "\n" +
    "namespace mynamespace {\n" +
    "\n" +
    "using ::foo::Bar;\n" +
    "\n" +
    "...code for mynamespace...    // Code goes against the left margin.\n";

const code10 = "// Shorten access to some commonly used names in .cc files.\n" +
    "namespace baz = ::foo::bar::baz;\n" +
    "\n" +
    "// Shorten access to some commonly used names (in a .h file).\n" +
    "namespace librarian {\n" +
    "namespace internal {  // Internal, not part of the API.\n" +
    "namespace sidetable = ::pipeline_diagnostics::sidetable;\n" +
    "}  // namespace internal\n" +
    "\n" +
    "inline void my_inline_function() {\n" +
    "  // namespace alias local to a function (or method).\n" +
    "  namespace baz = ::foo::bar::baz;\n" +
    "  ...\n" +
    "}\n" +
    "}  // namespace librarian";

const code11 = "namespace {\n" +
    "...\n" +
    "}  // namespace";

const code12 = "int i;\n" +
    "i = f();      // Bad -- initialization separate from declaration.\n" +
    "\n" +
    "int i = f();  // Good -- declaration has initialization.\n" +
    "\n" +
    "int jobs = NumJobs();\n" +
    "// More code...\n" +
    "f(jobs);      // Bad -- declaration separate from use.\n" +
    "\n" +
    "int jobs = NumJobs();\n" +
    "f(jobs);      // Good -- declaration immediately (or closely) followed by use.\n" +
    "\n" +
    "std::vector<int> v;\n" +
    "v.push_back(1);  // Prefer initializing using brace initialization.\n" +
    "v.push_back(2);\n" +
    "std::vector<int> v = {1, 2};  // Good -- v starts initialized.\n";

const code13 = "while (const char* p = strchr(str, '/')) str = p + 1;";

const code14 = "// Inefficient implementation:\n" +
    "for (int i = 0; i < 1000000; ++i) {\n" +
    "  Foo f;  // My ctor and dtor get called 1000000 times each.\n" +
    "  f.DoSomething(i);\n" +
    "}\n";

const code15 = "Foo f;  // My ctor and dtor get called once each.\n" +
    "for (int i = 0; i < 1000000; ++i) {\n" +
    "  f.DoSomething(i);\n" +
    "}\n";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    code1,
    code2,
    code3,
    code4,
    code5,
    code6,
    code7,
    code8,
    code9,
    code10,
    code11,
    code12,
    code13,
    code14,
    code15,
}

