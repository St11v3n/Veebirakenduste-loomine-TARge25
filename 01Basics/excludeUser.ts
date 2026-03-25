type RoleExclude = "admin" | "user" | "moderator"
type ExcludeRole = "testing" | "admin" | "user" | "security"

//võta mõlemast typest kokky ja välista teatud väärtused
type O = Exclude<ExcludeRole, "user" | "moderator">
//otsite internetis, mis ternary operator
//condition? eprIfTrue: exprIfFalse