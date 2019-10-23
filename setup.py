import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="osrs-quest-tool",
    version="0.0.1",
    author="James Cerniglia",
    author_email="cerniglj1@hawkmail.newpaltz.edu",
    description="A package to help developers access a structured form of runescape quests",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/cerniglj1/osrs-quest-tool",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.4',
)
