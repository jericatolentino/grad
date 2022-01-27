import graphene
from graphene_django import DjangoObjectType
from people.users.models import Hobby, User

# root class that defines all objects in graph
# for every model -> subclass djangoobjecttype and create a type + reference in query with resolver

class HobbyType(DjangoObjectType):
    class Meta:
        model = Hobby
        fields = ('id', 'sport')

class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'surname', 'age', 'hobby')

class Query(graphene.ObjectType):
    # graphene auto converts underscored strings to one camelCased string
    all_users = graphene.List(UserType)
    get_hobby_by_sport_name = graphene.Field(HobbyType, sport=graphene.String(required=True))

    # resolvers must start with 'resolve' and follow with type above
    def resolve_all_users(root, info):
        return User.objects.select_related('hobby').all()
        
        # all() = SELECT * FROM User
        # select_related('hobby') = follows foreign key relation and gets all related info, better for performance as it runs one query instead of 2

    def resolve_get_hobby_by_sport_name(root, info, sport):
        try:
            return Hobby.objects.get(sport=sport) 
        except Hobby.DoesNotExist:
            return 'No hobby with sport ' + sport

schema = graphene.Schema(query=Query)
# query {
#   allUsers {
#     firstName
#     surname
#     age
#     hobby {
#       id
#       sport
#     }
#   }
# }

# query {
#   getHobbyBySportName(sport: "Gym"){
#     id
#     sport
#   }
# }