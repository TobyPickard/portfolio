from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

engine = create_engine('sqlite:///example.db', echo=True)

Base = declarative_base()
class Project(Base):
    __tablename__ = 'projects'
    
    proj_id = Column(Integer, primary_key=True)
    proj_name = Column(String)
    proj_purpose= Column(String)
    objective = Column(String)
    tech_stack = Column(String)
    proj_start = Column(String)
    proj_end = Column(String)
    final_product = Column(String)

Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

project_data = {
    'proj_id': 1,
    'proj_name': 'testing',
    'proj_purpose': 'testing sqlalchemy',
    'objective': 'see above',
    'tech_stack': 'Python',
    'proj_start': 'Yesterday',
    'proj_end': 'tomorrow', 
    'final_product': 'you\'ll see',
}

project = Project(**project_data)
session.add(project)
session.commit()

projects = session.query(Project).all()
# for project in projects:
#     print(project)

session.close()
