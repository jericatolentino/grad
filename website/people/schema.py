import graphene

class Query(graphene.ObjectType):
    hello = graphene.String(default_value="Hi!")
    age_Test = graphene.Decimal(default_value=25)

schema = graphene.Schema(query=Query)