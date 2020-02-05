# Terraform Tool

### Terrext

Terrext is a tool that help you to validate terraform code base in a given rules

Only accepts \*.tf.json.

Tools for terraform CI/CD

```shell
$ terrext --help
```

```shell
terrext [command]

Commands:
  terrext paths      Return all realpath for each .tf.json file in a folder.
  terrext resources  List all resource with their custom names.
  terrext tags       List all tags for each resource in a terraform file.

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]                                  [boolean]
```

## EXAMPLES

### `terrext resources --file "/path/to/file.tf.json"`

```
[
  {
    provider_instance: [ 'example1', 'example2' ]
  }
]
```

### `terrext paths --folder "/path/to/folder"`

```
[
  '/path/to/folder/root.tf.json',
  '/path/to/folder/level-1-A/1-A.tf.json',
  '/path/to/folder/level-1-A/level-2-A/2-A-2.tf.json',
  '/path/to/folder/level-1-A/level-2-A/2-A.tf.json',
  '/path/to/folder/level-1-A/level-2-B/2-B.tf.json',
  '/path/to/folder/level-1-B/1-B.tf.json',
  '/path/to/folder/level-1-B/level-2-C/2-C.tf.json',
  '/path/to/folder/level-1-B/level-2-C/level-2-D/2-D.tf.json'
]
```

### `terrext tags --file "/path/to/folder/root.tf.json" --provider "shortname"`

```
[
  { example1: { tags: [ 'Name' ] } },
  { example2: { tags: [ 'Name' ] } }
]
```
